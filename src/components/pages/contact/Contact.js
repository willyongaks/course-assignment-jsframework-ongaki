import { useForm } from "react-hook-form" ;
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Heading from "../../layout/Heading";

const schema = yup.object().shape({
  firstName: yup.string().required("please enter your first name"),
  lastName: yup.string().required("please enter your last name").min(3, "Last name must be at least 3 charachters long"),
  email: yup.string().required("Please enter a valid email address").email("Please enter a valid email address"),
  message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
})

function Contact() {
 const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

  const onSubmit = data => {
    console.log(data)
  }

  console.log(errors)
  return (
    <>
      < Heading content="Contacnt us" />
      <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name</label><br />
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="Enter your first name"
        {...register("firstName")}
      /><br />
      {errors.firstName && <span>{errors.firstName.message}</span>}

      <label htmlFor="lastName">Last Name</label><br />
      <input
        type="text"
        id="lastName"
        name="lastName"
        {...register("lastName")}
        placeholder="Enter your last name"
      /><br/>
      {errors.lastName && <span>{errors.lastName.message}
      </span>}

      <label htmlFor="email">Email</label><br />
      <input 
        type="text"
        id="email"
        name="email"
        {...register("email")}
        placeholder="Enter your email"
      /><br />


      <label htmlFor="subject">Subject:</label><br />
      <select id="subject" name="subject" {...register}>
        <option value="">--please choose an option--</option>
        <option value="option1">option 1</option>
        <option value="option2">option 2</option>
      </select><br />
      {errors.subject && <span>{errors.subject.message}</span>}

      <label htmlFor="message">Message:</label><br />
      <textarea id="message" name="message" {...register("message")}></textarea><br />
      {errors.message && <span>{errors.message.message}</span>}

      <button type="submit">Send</button>
    </form>
    </>
  )
}

export default Contact