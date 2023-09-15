import { AnyObject, ObjectSchema } from "yup"

export type FormSection = 'register' | 'another'

export interface InputProps {
    type: 'text' | 'radio' | 'email' | 'password' | 'select' | 'checkbox' | 'textarea' | 'title'
    name: string
    value: string | number | boolean | Array<String>
    placeholder?: string
    label?: string
    typeValue?: 'boolean' | 'number'
    validations?: Validation[]
    options?: Opt[]
}

export interface Opt {
    value: string | number
    desc: string
}

export interface Validation {
    type: 'required' | 'isEmail' | 'minLength' | 'isTrue' | 'oneOf'
    value?: string | number | boolean | Array<any>
    message: string
    ref?: string
}

export type SchemaForm = 
ObjectSchema<
{[x: string]: any},
AnyObject
>

export type CustomInputProps = Omit<InputProps, 'validations' | 'typeValue' | 'value'>