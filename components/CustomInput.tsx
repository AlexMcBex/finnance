import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'



interface CustomInput {
    control: Control<z.infer<typeof authFormSchema>>,
    // name: 'email' | 'password', //name of the field between name and password
    name: FieldPath<z.infer<typeof authFormSchema>>, //name options taken directly form the schema in utils
    label: string,
    placeholder: string
}

const CustomInput = ({control, name, label, placeholder } : CustomInput ) => {
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <div className="form-item">
        <FormLabel className="form-label">{label}</FormLabel>
        <div className="flex w-full flex-col">
          <FormControl>
            <Input
              placeholder={placeholder}
              className="input-class"
              {...field} //field is from react hook form
              type={name === 'password' ? 'password' : 'text'}
            />
          </FormControl>
          <FormMessage className="form-message mt-2" />
        </div>
      </div>
    )}
  />

  )
}

export default CustomInput