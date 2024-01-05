export default function Home() {
	return (
		<main>
			<section
				class="relative bg-[url(https://images.unsplash.com/photo-1501949997128-2fdb9f6428f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat
			
			"
			>
				<div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

				<div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
					<div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
						<h1 class="text-3xl font-extrabold sm:text-5xl">
							This is my
							<strong class="block font-extrabold text-rose-700 ">
								{" "}
								Home Page
								{" "}
							</strong>
						</h1>

						<p class="mt-4 max-w-lg sm:text-xl/relaxed">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Nesciunt illo tenetur fuga ducimus numquam ea!
						</p>

						<div class="mt-10 flex flex-wrap gap-4 text-center">
							<a
								href="/login"
								class="px-8 z-30 py-4 bg-rose-400 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl"
							>
								Get Started
							</a>

							<a
								href="/about"
								class="px-8 z-30 py-4 bg-blue-400 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-blue-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl"
							>
								Learn More
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
