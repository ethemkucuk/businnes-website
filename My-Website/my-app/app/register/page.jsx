import React from "react"

const register = () => {
	return (
		<section class="bg-white">
			<div class="lg:grid lg:min-h-screen lg:grid-cols-12">
				<aside class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
					<img
						alt="Pattern"
						src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
						class="absolute inset-0 h-full w-full object-cover"
					/>
				</aside>

				<main class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
					<div class="max-w-xl lg:max-w-3xl">
						<a class="block text-pink-600" href="/">
							<span class="sr-only">Home</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="40"
								height="40"
								fill="currentColor"
								class="bi bi-fuel-pump-fill "
								viewBox="0 0 16 16"
							>
								<path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1q.846-.002 1.412.336c.383.228.634.551.794.907.295.655.294 1.465.294 2.081V7.5a.5.5 0 0 1-.5.5H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1zm2.5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5z" />
							</svg>
						</a>

						<h1 class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
							LOREM IPSUM
						</h1>

						<p class="mt-4 leading-relaxed text-gray-500">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Eligendi nam dolorum aliquam, quibusdam
							aperiam voluptatum.
						</p>

						<form action="#" class="mt-8 grid grid-cols-6 gap-6">
							<div class="col-span-6 sm:col-span-3">
								<label
									for="FirstName"
									class="block text-sm font-medium text-gray-700"
								>
									First Name
								</label>

								<input
									type="text"
									id="FirstName"
									name="first_name"
									class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
								/>
							</div>

							<div class="col-span-6 sm:col-span-3">
								<label
									for="LastName"
									class="block text-sm font-medium text-gray-700"
								>
									Last Name
								</label>

								<input
									type="text"
									id="LastName"
									name="last_name"
									class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
								/>
							</div>

							<div class="col-span-6">
								<label
									for="Email"
									class="block text-sm font-medium text-gray-700"
								>
									{" "}
									Email{" "}
								</label>

								<input
									type="email"
									id="Email"
									name="email"
									class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
								/>
							</div>

							<div class="col-span-6 sm:col-span-3">
								<label
									for="Password"
									class="block text-sm font-medium text-gray-700"
								>
									{" "}
									Password{" "}
								</label>

								<input
									type="password"
									id="Password"
									name="password"
									class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
								/>
							</div>

							<div class="col-span-6 sm:col-span-3">
								<label
									for="PasswordConfirmation"
									class="block text-sm font-medium text-gray-700"
								>
									Password Confirmation
								</label>

								<input
									type="password"
									id="PasswordConfirmation"
									name="password_confirmation"
									class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
								/>
							</div>

							<div class="col-span-6">
								<label for="MarketingAccept" class="flex gap-4">
									<input
										type="checkbox"
										id="MarketingAccept"
										name="marketing_accept"
										class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
									/>

									<span class="text-sm text-gray-700">
										I want to receive emails about events,
										product updates and company
										announcements.
									</span>
								</label>
							</div>

							<div class="col-span-6">
								<p class="text-sm text-gray-500">
									By creating an account, you agree to our
									<a href="#" class="text-gray-700 underline">
										{" "}
										terms and conditions{" "}
									</a>
									and
									<a href="#" class="text-gray-700 underline">
										privacy policy
									</a>
									.
								</p>
							</div>

							<div class="col-span-6 sm:flex sm:items-center sm:gap-4">
								<button class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
									Create an account
								</button>

								<p class="mt-4 text-sm text-gray-500 sm:mt-0">
									Already have an account?
									<a href="#" class="text-gray-700 underline">
										Log in
									</a>
									.
								</p>
							</div>
						</form>
					</div>
				</main>
			</div>
		</section>
	)
}

export default register
