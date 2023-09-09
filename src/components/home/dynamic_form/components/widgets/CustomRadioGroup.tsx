import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '../../components'
import { CustomInputProps } from '../../types'

export const CustomRadio = ({ name, label, options, ...props }: CustomInputProps) => {
	const {
		register,
		formState: { errors }
	} = useFormContext()

	const error = errors[name]?.message as string | undefined

	return (
		<div className='flex flex-col py-3'>
			<div className=' row items-center gap-4'>
				<label className='col-auto text-muted h5 control-label gap-2'>{label}</label>
				<section className='col-9 justify-between flex-1 px-2'>
					{options &&
						options.map(({ desc, value }) => (
							<div className='form-check-inline'>
								<input {...register(name)} {...props} value={value} className='form-check-input"' type='radio' />
							<label
								key={value}
								className='form-check-label items-center gap-2 cursor-pointer rounded px-2 h5'
							> {desc} </label>
							</div>
						))}
				</section>
			</div>
			<ErrorMessage error={error} />
		</div>
	)
}