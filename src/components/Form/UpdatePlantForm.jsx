import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { imageUpload } from "../../Utils"; // AddPlantForm style

const UpdatePlantForm = ({ plant, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    quantity: "",
    image: null, // local file
  });

  useEffect(() => {
    if (plant) {
      setFormData({
        name: plant.name || "",
        category: plant.category || "home",
        description: plant.description || "",
        price: plant.price || "",
        quantity: plant.quantity || "",
        image: null,
      });
    }
  }, [plant]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = plant.image; // default current image
      if (formData.image) {
        imageUrl = await imageUpload(formData.image); // upload new image and get URL
      }

      const DecorationData = {
        name: formData.name,
        category: formData.category,
        description: formData.description,
        price: Number(formData.price),
        quantity: Number(formData.quantity),
        image: imageUrl,
      };

      await axios.put(`${import.meta.env.VITE_API_URL}/decoration/${plant._id}`, DecorationData);

      toast.success("Decoration updated successfully");
      closeModal();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update decoration");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Decoration Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-3 border text-black border-black rounded-md"
        required
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full px-4 py-3 border text-black border-black rounded-md"
        required
      >
        <option value="home">Home Decoration</option>
        <option value="wedding">Wedding Decoration</option>
        <option value="corporation">Corporation</option>
        <option value="office">Office</option>
        <option value="ceremony">Ceremony</option>
        <option value="birthday">BirthDay</option>
        <option value="event">Event</option>
      </select>

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full h-28 px-4 py-3 text-black border border-black rounded-md"
      />

      <input
        type="number"
        name="price"
        placeholder="Price per unit"
        value={formData.price}
        onChange={handleChange}
        className="w-full px-4 py-3 border text-black border-black rounded-md"
        required
      />

      {/* Image Upload */}
      <label className="flex text-black flex-col items-center gap-2 cursor-pointer border border-dashed border-black p-4 rounded-md hover:border-black/70 transition">
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
        <span className="px-4 py-2 border border-black rounded-md text-sm font-medium hover:bg-black hover:text-white transition">
          {formData.image ? formData.image.name : "Upload Image"}
        </span>
      </label>

      <button
        type="submit"
        className="w-full py-3 mt-4 bg-black text-white rounded-md hover:bg-black/90 font-bold transition"
      >
        Update Decoration
      </button>
    </form>
  );
};

export default UpdatePlantForm;
