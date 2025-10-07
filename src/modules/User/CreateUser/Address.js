const Address = ({ fields, register, errors, remove }) => {
  return fields.map((field, index) => (
    <div key={field.id} className="mb-4 p-4 border rounded">
      <div className="flex flex-col gap-2 mb-2">
        <div>
          <input
            type="text"
            placeholder="Street"
            {...register(`addresses.${index}.street`, {
              required: 'Street is required',
            })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.addresses?.[index]?.street && (
            <p className="text-red-500 text-sm mt-1">
              {errors.addresses[index].street.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="City"
            {...register(`addresses.${index}.city`, {
              required: 'City is required',
            })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.addresses?.[index]?.city && (
            <p className="text-red-500 text-sm mt-1">
              {errors.addresses[index].city.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="State"
            {...register(`addresses.${index}.state`, {
              required: 'State is required',
            })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.addresses?.[index]?.state && (
            <p className="text-red-500 text-sm mt-1">
              {errors.addresses[index].state.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="ZIP"
            {...register(`addresses.${index}.zip`, {
              required: 'ZIP is required',
            })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.addresses?.[index]?.zip && (
            <p className="text-red-500 text-sm mt-1">
              {errors.addresses[index].zip.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={() => remove(index)}
        className="px-2 py-1 bg-red-500 text-white rounded"
      >
        Remove Address
      </button>
    </div>
  ));
};

export default Address;
