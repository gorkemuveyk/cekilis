import React, { useState } from "react";
const Checkout = () => {
  return (
    <div class="font-[sans-serif] bg-white">
      <div class="max-lg:max-w-xl mx-auto w-full">
        <div class="grid lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2 max-lg:order-1 p-6 !pr-0 max-w-4xl mx-auto w-full">
            <div class="text-center max-lg:hidden">
              <h2 class="text-3xl font-extrabold text-gray-800 inline-block border-b border-gray-800 pb-1">
                Checkout
              </h2>
            </div>

            <form class="lg:mt-16">
              <div>
                <h2 class="text-xl font-bold text-gray-800">Shipping info</h2>

                <div class="grid sm:grid-cols-2 gap-8 mt-8">
                  <input
                    type="text"
                    placeholder="Name"
                    class="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    class="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Street address"
                    class="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    class="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    class="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Postal code"
                    class="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                </div>
              </div>

              <div class="mt-16">
                <h2 class="text-xl font-bold text-gray-800">Payment method</h2>

                <div class="grid gap-4 sm:grid-cols-2 mt-4">
                  <div class="flex items-center">
                    <input
                      type="radio"
                      class="w-5 h-5 cursor-pointer"
                      id="card"
                      name="odeme"
                      checked
                    />
                    <label for="card" class="ml-4 flex gap-2 cursor-pointer">
                      <img
                        src="https://readymadeui.com/images/visa.webp"
                        class="w-12"
                        alt="card1"
                      />
                      <img
                        src="https://readymadeui.com/images/american-express.webp"
                        class="w-12"
                        alt="card2"
                      />
                      <img
                        src="https://readymadeui.com/images/master.webp"
                        class="w-12"
                        alt="card3"
                      />
                    </label>
                  </div>

                  <div class="flex items-center">
                    <input
                      type="radio"
                      class="w-5 h-5 cursor-pointer"
                      id="paypal"
                      name="odeme"
                    />
                    <label for="paypal" class="ml-4 flex gap-2 cursor-pointer">
                      <img
                        src="https://readymadeui.com/images/paypal.webp"
                        class="w-20"
                        alt="paypalCard"
                      />
                    </label>
                  </div>
                </div>

                <div class="grid gap-8 mt-8">
                  <input
                    type="text"
                    placeholder="Cardholder's Name"
                    class="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                  />

                  <div class="flex bg-white border-b focus-within:border-gray-800 overflow-hidden">
                    <input
                      type="number"
                      placeholder="Card Number"
                      class="px-2 pb-2 bg-white text-gray-800 w-full text-sm outline-none"
                    />
                  </div>

                  <div class="grid grid-cols-2 gap-6">
                    <input
                      type="number"
                      placeholder="EXP."
                      class="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                    />
                    <input
                      type="number"
                      placeholder="CVV"
                      class="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                    />
                  </div>

                  <div class="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label for="remember-me" class="ml-3 block text-sm">
                      I accept the{" "}
                      <a
                        href="javascript:void(0);"
                        class="text-blue-600 font-semibold hover:underline ml-1"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap gap-4 mt-8">
                <a
                  href="/cart-detail"
                  type="button"
                  class="min-w-[150px] text-center px-6 py-3.5 text-sm bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                >
                  Back
                </a>
                <a
                  type="button"
                  class="min-w-[150px] text-center px-6 py-3.5 text-sm bg-gray-800 text-white rounded-lg hover:bg-gray-900"
                >
                  Confirm payment $1.00
                </a>
              </div>
            </form>
          </div>

          <div class=" lg:h-screen lg:sticky lg:top-0">
            <div class="relative h-full">
              <div class="p-6 lg:overflow-auto lg:h-[calc(100vh-60px)] max-lg:mb-8">
                <h2 class="text-xl font-bold text-gray-800">Order Summary</h2>

                <div class="space-y-8 mt-8">
                  <div class="flex flex-col gap-4">
                    <div class="max-w-[170px] p-4 shrink-0 rounded-lg">
                      <img
                        src="/img/iphone4.png"
                        class="w-full object-contain"
                      />
                    </div>

                    <div class="w-full">
                      <h3 class="text-base text-gray-800 font-bold">
                        iPhone 15 Pro Max Blue Titanium (512 GB)
                      </h3>
                      <ul class="text-sm text-gray-800 space-y-2 mt-2">
                        <li class="flex flex-wrap gap-4">
                          Quantity <span class="ml-auto">1</span>
                        </li>
                        <li class="flex flex-wrap gap-4">
                          Total Price <span class="ml-auto">$1.00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="lg:absolute lg:left-0 lg:bottom-0 bg-gray-200 w-full p-4">
                <h4 class="flex flex-wrap gap-4 text-base text-gray-800 font-bold">
                  Total <span class="ml-auto">$1.00</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
