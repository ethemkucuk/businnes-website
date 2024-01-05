import React from "react"

const navbar = () => {
	return (
		<header class="bg-gray-100">
			<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
				<div class="flex h-16 items-center justify-between">
					<div class="flex-1 md:flex md:items-center md:gap-12  ">
						<a
							class="cursor-pointer transition-all 
							bg-gray-100 text-black px-6 py-2 rounded-lg
							border-pink-400
							border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
							active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-pink-300 shadow-pink-300 active:shadow-none "
							href="/"
						>
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
					</div>

					<div class="md:flex md:items-center md:gap-12">
						<nav aria-label="Global" class="hidden md:block">
							<ul class="flex items-center gap-4 text-sm ">
								<li>
									<a
										class="cursor-pointer transition-all bg-red-500 text-white px-6 py-2 rounded-lg
										border-red-600
										border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
										active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
										href="/"
									>
										{" "}
										Home{" "}
									</a>
								</li>

								<li>
									<a
										class=" cursor-pointer transition-all bg-red-500 text-white px-6 py-2 rounded-lg
										border-red-600
										border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
										active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
										href="/about"
									>
										{" "}
										About{" "}
									</a>
								</li>

								<li>
									<a
										class=" cursor-pointer transition-all bg-red-500 text-white px-6 py-2 rounded-lg
										border-red-600
										border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
										active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
										href="/history"
									>
										{" "}
										History{" "}
									</a>
								</li>

								<li>
									<a
										class="cursor-pointer transition-all bg-red-500 text-white px-6 py-2 rounded-lg
										border-red-600
										border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
										active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
										href="/services"
									>
										{" "}
										Services{" "}
									</a>
								</li>

								<li>
									<a
										class="cursor-pointer transition-all bg-red-500 text-white px-6 py-2 rounded-lg
										border-red-600
										border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
										active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
										href="/projects"
									>
										{" "}
										Projects{" "}
									</a>
								</li>

								<li>
									<a
										class="cursor-pointer transition-all bg-red-500 text-white px-6 py-2 rounded-lg
										border-red-600
										border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
										active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
										href="/blog"
									>
										{" "}
										Blog{" "}
									</a>
								</li>
							</ul>
						</nav>

						<div class="flex items-center gap-4">
							<div class="sm:flex sm:gap-4">
								<a
									class="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow  cursor-pointer transition-all 
									bg-gray-700 text-white px-6 py-2 rounded-lg
									border-green-400
									border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
									active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none"
									href="/login"
								>
									Login
								</a>

								<div class="hidden sm:flex">
									<a
										class="rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-teal-600 cursor-pointer transition-all 
										bg-gray-300 text-white px-6 py-2 rounded-lg
										border-green-400
										border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
										active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none"
										href="/register"
									>
										Register
									</a>
								</div>
							</div>

							<div class="block md:hidden">
								<button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default navbar
