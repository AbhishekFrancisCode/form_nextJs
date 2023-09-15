import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { CustomCheckbox, CustomInput, CustomRadio, CustomSelect} from './widgets'
import { InputProps, SchemaForm } from '../types'
import { Daum } from '../module/model/countryList'
import { CustomTextArea } from './widgets/CustomeTextArea'
import axios from 'axios'
import { useState } from 'react'

interface Props {
	onSubmit: (data: unknown) => void
	labelButtonSubmit?: string
	titleForm?: string
	initialValues: unknown
	validationSchema: SchemaForm
	inputs: InputProps[]
	clist: Daum[]
}
const url = "http://localhost:3333/form/formdata/";
export const Form = ({ ...props }: Props) => {
	const [show, setShow] = useState(false);
	const [post, setPost] = useState(null);
	const [resStatus, setResStatus] = useState("");
	const {
		initialValues,
		inputs,
		onSubmit,
		validationSchema,
		titleForm,
		labelButtonSubmit = 'Submit',
		clist
	} = props

	const formMethods = useForm({
		resolver: yupResolver(validationSchema),
		defaultValues: { ...(initialValues as any) }
	})

	const { register, handleSubmit } = formMethods;

	const myfun = (formdata : any) => {
		console.log(formdata + "myfun");
		axios
		.post(url, formdata)
		.then(function (response) {
		  console.log(response.status);
		  if (response.status === 200) {
			setResStatus("Successful Registration!");
		  } else {
			setResStatus("error");
		  }
		})
		.catch(function (error) {
		  console.log(error);
		});
	  };


	const createInputs = () =>
		inputs.map(({ validations, typeValue, value, ...inputProps }) => {
			switch (inputProps.type) {
				case 'title':
					return <div key ="dumy"className='py-2 h4'>{inputProps.label}</div>
				case 'select':
					return <CustomSelect {...inputProps} key={inputProps.name} />
				case 'checkbox':
					return <CustomCheckbox {...inputProps} key={inputProps.name} />
				case 'radio':
					return <CustomRadio {...inputProps} key={inputProps.name} />
				case 'textarea':
					return <CustomTextArea {...inputProps} key={inputProps.name} />
				default:
					return <CustomInput {...inputProps} key={inputProps.name} />
			}
		})

	return (
		<FormProvider {...formMethods}>
			<form
				onSubmit={formMethods.handleSubmit(myfun)}
				className='rounded-md p-10 pt-5 shadow-2xl shadow-primary/30 flex flex-col gap-2 w-full min-h-[390px]'>
				<section className='flex-1 flex flex-col gap-3'>{createInputs()}</section>
				<button
					className='btn btn-primary justify-center col-4 py-4 my-5'
					type='submit'>
					{labelButtonSubmit}
				</button>
			</form>
		</FormProvider>
	)
}

