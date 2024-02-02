import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {Form, FormSection, FormSubmit, Input} from "./Components/ReusableForm";
import Container from "./Components/Ui/Container";
import { z } from "zod";

const App = () => {
 return (
 // form component structure function
const { handleSubmit, register, formState:{errors}} = useForm<TText>();
const FormOnSubmit = (data:FieldValues) => {
  console.log(data)
}
const TestSchema = z.object({
  name:z.string(),
  email:z.string().email(),
});

type TText = z.infer<typeof TestSchema>

return (
  <Contain>
    <Form double={true} onSubmit={handleSubmit(FormOnSubmit) as SubmitHandler<FieldValues>}>
      <FormSection>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            name
          </label>
          <input
            className="w-full"
            type="text"
            id="name"
            {...register("name")}
          />
          {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
        </div>
        <Input type='email' label="Email" errors={errors} register={register('email')}/>
      </FormSection>
      <FormSubmit />
    </Form>
  </Contain>
);
 );
};

export default App;