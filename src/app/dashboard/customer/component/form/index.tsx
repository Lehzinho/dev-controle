"use client";
import Input from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "O campo nome é obrigatorio"),
  email: z
    .string()
    .email("Digite um email valido.")
    .min(1, "O email é obrigatorio."),
  phone: z.string().refine(
    (value) => {
      return (
        /^(?:\(\d{2}\)\s?)?\d{9}$/.test(value) ||
        /^\d{2}\s\d{9}$/.test(value) ||
        /^\d{11}$/.test(value)
      );
    },
    { message: "O numero de telefone deve estart (DD) 99999999" }
  ),
  address: z.string(),
});

type FormData = z.infer<typeof schema>;

export default function NewCustomerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function handleRegisterCustomer(data: FormData) {
    console.log(data);
  }
  return (
    <form
      className="flex flex-col mt-6"
      onSubmit={handleSubmit(handleRegisterCustomer)}
    >
      <label className="mb-1 text-lg font-medium" htmlFor="name">
        Nome Completo:
      </label>
      <Input
        type="text"
        name="name"
        placeholder="Digite o nome completo"
        error={errors?.name?.message}
        register={register}
      />
      <section className="flex gap-2 mt-2 my-2 flex-col sm:flex-row">
        <div className="flex-1">
          <label className="mb-1 text-lg font-medium" htmlFor="name">
            Email:
          </label>
          <Input
            type="email"
            name="email"
            placeholder="Digite o Email..."
            error={errors?.email?.message}
            register={register}
          />
        </div>
        <div className="flex-1">
          <label className="mb-1 text-lg font-medium" htmlFor="name">
            Telefone:
          </label>
          <Input
            type="text"
            name="phone"
            placeholder="Exemplo (DD) 99991923"
            error={errors?.phone?.message}
            register={register}
          />
        </div>
      </section>
      <label className="mb-1 text-lg font-medium" htmlFor="name">
        Endereço completo
      </label>
      <Input
        type="text"
        name="address"
        placeholder="Digite o endereço completo"
        error={errors?.address?.message}
        register={register}
      />
      <button className="bg-blue-500 my-4 px-2 h-11 rounded text-white font-bold">
        Cadastrar
      </button>
    </form>
  );
}
