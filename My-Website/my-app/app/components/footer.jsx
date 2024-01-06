import React from "react"

const footer = () => {
	return (
		<footer class="bg-gray-100">
			<div class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
				<div class="lg:flex lg:items-end lg:justify-between">
					<div>
						<div class="flex justify-center text-gray-600 lg:justify-start">
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
						</div>

						<p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Incidunt consequuntur amet culpa cum itaque
							neque.
						</p>
					</div>

					<ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
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
								href="/services"
							>
								{" "}
								Services{" "}
							</a>
						</li>

						<li>
							<a
								class=" cursor-pointer transition-all bg-red-500 text-white px-6 py-2 rounded-lg
								border-red-600
								border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
								active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
								href="/project"
							>
								{" "}
								Projects{" "}
							</a>
						</li>

						<li>
							<a
								class=" cursor-pointer transition-all bg-red-500 text-white px-6 py-2 rounded-lg
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
				</div>

				<p class="mt-12 text-center text-sm text-gray-500 lg:text-right">
					Copyright &copy; 2024. MADE BY ETHEM
				</p>
			</div>
		</footer>
	)
}

export default footer
