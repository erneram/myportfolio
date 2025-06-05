<template>
     <div>
          <!-- Formulario -->
          <form action="#" method="POST" class="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
               <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                         <div>
                              <label for="first-name" class="block text-sm font-semibold text-white">First name</label>
                              <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                   class="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600" />
                         </div>
                         <div>
                              <label for="last-name" class="block text-sm font-semibold text-white">Last name</label>
                              <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                   class="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600" />
                         </div>
                         <div class="sm:col-span-2">
                              <label for="email" class="block text-sm font-semibold text-white">Email</label>
                              <input type="email" name="email" id="email" autocomplete="email"
                                   class="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600" />
                         </div>
                         <div class="sm:col-span-2">
                              <label for="phone-number" class="block text-sm font-semibold text-white">Phone
                                   number</label>
                              <input type="tel" name="phone-number" id="phone-number" autocomplete="tel"
                                   class="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600" />
                         </div>
                         <div class="sm:col-span-2">
                              <label for="message" class="block text-sm font-semibold text-white">Message</label>
                              <textarea name="message" id="message" rows="4"
                                   class="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 placeholder:text-gray-400 shadow-sm outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"></textarea>
                         </div>
                    </div>
                    <div class="mt-8 flex justify-end">
                         <button type="submit"
                              class="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-indigo-600">Send
                              message</button>
                    </div>
               </div>
          </form>
     </div>
</template>
<script script>
</script>