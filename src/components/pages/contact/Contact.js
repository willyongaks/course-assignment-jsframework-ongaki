import "./index.css"
import { useForm } from "react-hook-form" ;
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Heading from "../../layout/Heading";
import { Form, FormControl, Button } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const schema = yup.object().shape({
  firstName: yup.string().required("please enter your first name"),
  lastName: yup.string().required("please enter your last name").min(3, "Last name must be at least 3 charachters long"),
  email: yup.string().required("Please enter a valid email address").email("Please enter a valid email address"),
  message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
  subject: yup.string().required("Please select one of the subjects"),
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
      <Form onSubmit={handleSubmit(onSubmit)} className="contact-form text-center text-md-start d-flex flex-column justify-content-center">
      <div className="name-inputs d-flex mb-3">
        <div className="col-6">
           <FormControl
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First name"
          {...register("firstName")}
        />
        {errors.firstName && <span>{errors.firstName.message}</span>}

        </div>
        <div className="col-6">
          <FormControl
          type="text"
          id="lastName"
          name="lastName"
          {...register("lastName")}
          placeholder="last name"
          />
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </div>
        
      </div>
      <div className="mb-3">
        <FormControl 
          type="text"
          id="email"
          name="email"
          {...register("email")}
          placeholder="Email"
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div className="mb-3">
        <FloatingLabel controlId="floatingSelect" label="Works with selects" {...register("subject", { required: true })}>
          <Form.Select aria-label="Floating label select example">
            <option>Open this select menu</option>
            <option value="1">one</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            
          </Form.Select>
        </FloatingLabel>
        {errors.subject && <span>{errors.subject.message}</span>}
      </div>
      <div className="mb-3">
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '100px' }}
            {...register("message")}
          />
          {errors.message && <span>{errors.message.message}</span>}
        </FloatingLabel>
      </div>

      <Button type="submit" className="contact-btn">Send</Button>
    </Form>
    </>
  )
}

export default Contact