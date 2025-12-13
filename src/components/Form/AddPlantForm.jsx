import { useForm } from "react-hook-form";
import { imageUpload } from "../../Utils";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";

const AddPlantForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const creatorPhoto = user?.photoURL;
  const creatorEmail = user?.email;
  const creatorName = user?.displayName;

  const onSubmit = async (data) => {
    const { name, category, price, image, description } = data;
    const createdAt = new Date();
    const status = "Available";
    const rattings = 0;

    const imageFile = image[0];

    try {
      const imageURL = await imageUpload(imageFile);
      const DecorationData = {
        image: imageURL,
        name,
        category,
        price: Number(price),
        description,
        createdAt,
        status,
        rattings: Number(rattings),
        Decoration_Creator: {
          creatorPhoto,
          creatorEmail,
          creatorName,
        },
      };

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/decorations`,
        DecorationData
      );
      console.log(data);

      Swal.fire({
        title: "Decoration added Successfully!",
        icon: "success",
        draggable: true,
      });
      
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Decoration added Failed",
        icon: "error",
        draggable: true,
      });
    }
  };

  return (
    <div className="w-full mt-10  md:w-full flex flex-col justify-center items-center text-base-content rounded-xl bg-base-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-6 lg:p-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {/* Name */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-primary font-medium">
                Name
              </label>
              <input
                className="w-full px-4 py-3 border-2 border-primary rounded-md bg-base-100 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200 text-base-content"
                id="name"
                type="text"
                placeholder="Decoration Name"
                {...register("name", {
                  required: "Decoration title is required",
                })}
              />
              {errors.name && (
                <p className="text-red-600 mt-1 text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Category */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="category"
                className="block text-primary font-medium"
              >
                Category
              </label>
              <select
                className="w-full px-4 py-3 border-2 border-primary rounded-md bg-base-100 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200 text-base-content"
                {...register("category", { required: "Category is required" })}
              >
                <option value="">Sellect Category</option>
                <option value="home">Home Decoration</option>
                <option value="wedding">Wedding Decoration</option>
                <option value="office">Corporate</option>
                <option value="office">Office</option>
                <option value="ceremony">Ceremony</option>
                <option value="event">Birthday</option>
                <option value="event">Event</option>
              </select>
              {errors.category && (
                <p className="text-red-600 mt-1 text-sm">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="description"
                className="block text-primary font-medium"
              >
                Description
              </label>
              <textarea
                id="description"
                placeholder="Write decoration description here..."
                className="block w-full h-32 px-4 py-3 border-2 border-primary rounded-md bg-base-100 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200 text-base-content"
                {...register("description", {
                  required: "Description is required",
                  minLength: {
                    value: 20,
                    message: "Description must be longer then 30 carecters",
                  },
                })}
              />
              {errors.description && (
                <p className="text-red-600 mt-1 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-6 flex flex-col">
            {/* Price */}
            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-primary font-medium">
                Price
              </label>
              <input
                className="w-full px-4 py-3 border-2 border-primary rounded-md bg-base-100 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200 text-base-content"
                id="price"
                type="number"
                placeholder="Price per unit"
                step="0"
                onInput={(e) => {
                  if (e.target.value < 0) e.target.value = 0;
                }}
                {...register("price", { required: "Price must required" })}
              />
              {errors.price && (
                <p className="text-red-600">{errors.price.message}</p>
              )}
            </div>

            {/* Image */}
            <div className="p-4 w-full m-auto rounded-lg grow">
              <div className="file_upload px-5 py-3 relative border-2 border-dashed border-primary rounded-lg hover:border-primary transition-all duration-200">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      id="image"
                      accept="image/*"
                      {...register("image", { required: "Image is required" })}
                    />
                    <div className="bg-primary text-white border border-primary rounded font-semibold cursor-pointer p-2 px-4 hover:bg-primary-focus transition-all duration-200">
                      Upload
                    </div>
                  </label>
                </div>
              </div>
              {errors.image && (
                <p className="text-red-600 mt-1 text-sm">
                  {errors.image.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full cursor-pointer p-3 mt-5 text-center font-medium text-white transition-all duration-200 rounded shadow-md bg-primary hover:bg-primary-focus focus:ring-2 focus:ring-primary"
            >
              Save & Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPlantForm;
