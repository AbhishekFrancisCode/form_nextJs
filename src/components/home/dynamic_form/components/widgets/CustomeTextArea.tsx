import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '..'
import { CustomInputProps } from '../../types'

export const CustomTextArea = ({ name, label, ...props }: CustomInputProps) => {
	const {
		register,
		formState: { errors }
	} = useFormContext()

	const error = errors[name]?.message as string | undefined

	const id = `${name}-${props.type}-${label}`

	return (
		<div className='form-group py-3'>
			<label className='text-muted h5 control-label px-2' htmlFor={id}>
				{label}
			</label>
			<div className=''>
				<textarea
					className='form-control form-control-lg'
					{...register(name)}
					{...props}
					id={id}
                    rows={3}
				/>
			</div>
			<ErrorMessage error={error} />
		</div>
	)
}