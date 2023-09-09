import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '../../components'
import { CustomInputProps } from '../../types'

export const CustomCheckbox = ({ name, label, options,...props }: CustomInputProps) => {
	const {
		register,
		formState: { errors }
	} = useFormContext()

	const error = errors[name]?.message as string | undefined

	return (
		<div className='flex flex-col py-3'>
			<div className='items-center gap-4'>
				<label className='text-muted h5 control-label gap-2'>{label}</label>
				<section className='justify-between flex-col-6 px-2'>
					{options &&
						options.map(({ desc, value }) => (
							<div className='form-check-inline col-3 py-2'>
							<input {...register(name)} {...props} value={value} className='form-check-input' type='checkbox' />
							<label
								key={value}
								className='form-check-label items-center gap-2 cursor-pointer rounded px-2 h6 font-weight-bold'
							> {desc} </label>
							</div>
						))}
				</section>
			</div>
			<ErrorMessage error={error} />
		</div>
	)
}