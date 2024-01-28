export function Filter() {
  return (
    <div className="sticky top-4 mt-3 flex h-fit flex-col gap-6 rounded-xl bg-translucent-bg p-6">
      <h5 className="mb-6">ΦΙΛΤΡΑ</h5>

      {/* Euro price */}
      <div className="flex flex-col gap-6">
        <p className="h7">Ευροσ τιμησ</p>
        <div className="flex gap-2">
          <div className="flex w-1/2 flex-col gap-2">
            <label className="text-small-12">Από</label>
            <input
              className="text-field-14 rounded-lg border-[1px] border-field-border bg-translucent-bg px-4 py-3 placeholder-gray"
              type="number"
              placeholder="€"
            />
          </div>
          <div className="flex w-1/2 flex-col gap-2">
            <label className="text-small-12">Έως</label>
            <input
              className="text-field-14 rounded-lg border-[1px] border-field-border bg-translucent-bg px-4 py-3 placeholder-gray"
              type="number"
              placeholder="€"
            />
          </div>
        </div>
        <div className="text-field-14 space-y-4">
          <div className="flex items-center gap-2">
            <input type="radio" id="less50" name="price" value="less50" />
            <label htmlFor="less50" className="w-full cursor-pointer">
              Έως 50 €
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" id="50to150" name="price" value="50to150" />
            <label htmlFor="50to150" className="w-full cursor-pointer">
              50 - 150 €
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" id="150to500" name="price" value="150to500" />
            <label htmlFor="150to500" className="w-full cursor-pointer">
              150 - 500 €
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
