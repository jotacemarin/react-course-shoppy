import Card from "../../components/Card";

function MyAccount() {
  return (
    /* <!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
--> */
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Array(6)
            .fill((i) => i)
            .map((_, i) => (
              <Card key={i} category="asda" id={i} price={50} title="test" image="asda" />
            ))}

          {/* <!-- More products... --> */}
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
