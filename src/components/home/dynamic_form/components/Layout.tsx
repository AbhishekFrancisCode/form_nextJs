export const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
	return (
		<>
			<h1 className='justify-center h4 px-5 pt-5 ml-md'>
				<span>#1 SUPPLIER OF<br/>MODULAR KITCHENS. WARDROBES & MORE</span>
				{/* <span className='font-bold bg-clip-text text-transparent  text-[#EC5990]'>
					{' - '}
				</span> */}
			</h1>
			<main className='grid sm:grid-cols-2 grid-cols-1 sm:mb-0 mb-10 gap-10 place-items-start justify-items-center px-5 ml-md'>
				{children}
			</main>
		</>
	)
}