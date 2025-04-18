import { useForm } from "react-hook-form";
import "./App.css";

interface ProductForm {
  name: string;
  quantity: number;
}

function App() {
  console.log("[Component rerender]");

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<ProductForm>({
    shouldFocusError: true,
    mode: "onSubmit",
    defaultValues: {
      name: "DucAnh",
      quantity: 2305,
    },
  });

  const onSubmit = (data: ProductForm) => {
    console.log("[ProductForm]: ", data);
    console.log("[GetValue]: ", getValues()); // same
  };

  const handleUpdateValue = () => {
    setValue("name", "updated-product-name", {
      // shouldValidate: true // rerender component
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", {
            required: "name is required",
            disabled: false,
          })}
          placeholder="name"
        />
        {errors.name && <p>[name error]: {errors.name.message}</p>}
        <div>
          <button type="button" onClick={handleUpdateValue}>
            Button-Update-Name
          </button>
        </div>
        <div>
          <button type="submit"> Button </button>
        </div>
      </form>
    </div>
  );
}

export default App;
