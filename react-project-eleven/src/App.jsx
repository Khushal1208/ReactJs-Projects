import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
// Api Call ko simulate karte h
    await new Promise((resolve) => setTimeout(resolve,5000))

    console.log("sumbmitting the form", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label> First Name: </label>
        <input
        // to style when error occur
        className={errors.firstName ? 'input-error':""}
          {...register("firstName", {
            required: true, //first can't be empty
            maxLength: {value:10,message:"maxlength can be 10"},
            minLength: {value:3,message:"min length atleast 3"},
            pattern: {
              value:/^[A-Za-z]+$/i ,
              message:'First Name is not as per the rules'
            }
          })}
        />
        {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}
      </div>
      <div>
        <label> Middle Name: </label>
        <input
        className={errors.firstName ? 'input-error':""}
          {...register("middleName", {
            required: true,
            maxLength: {value:10,message:"maxlength can be 10"},
            minLength: {value:3,message:"min length atleast 3"},
            pattern: {
              value:/^[A-Za-z]+$/i ,
              message:'Middle Name is not as per the rules'
            }
          })}
        />
        {errors.middleName && <p className="error-msg">{errors.middleName.message}</p>}
      </div>
      <div>
        <label> Last Name: </label>
        <input
        className={errors.firstName ? 'input-error':""}
          {...register("lastName", {
            required: true,
            maxLength: {value:10,message:"maxlength can be 10"},
            minLength: {value:3,message:"minlength atleast 3"},
            pattern: {
              value:/^[A-Za-z]+$/i ,
              message:'Last Name is not as per the rules'
            }
          })}
        />
        {errors.lastName && <p className="error-msg">{errors.lastName.message}</p>}
      </div>
      <input type="submit" disabled={isSubmitting}
      value={isSubmitting ? "Submitting":"Submit"} />
    </form>
  );
}

export default App;

// npm i react-hook-form
