import React from 'react'
import styles from './InputText.module.scss'

export interface InputTextProps {
  placeholder?: string
  value: string
  identity?: string
  className?: string
  minLength?: number
  maxLength?: number
  onChange?: (val: string) => void
  onBlur?: () => void
  type?: string
}

export const InputText: React.FC<InputTextProps> = ({
  placeholder,
  value,
  className,
  maxLength,
  minLength,
  identity,
  onChange,
  onBlur,
  type = 'text',
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.box}>
        <div className={styles.inner}>
          <input
            type={type}
            name={identity}
            placeholder={placeholder}
            autoComplete={identity}
            className={className}
            minLength={minLength}
            maxLength={maxLength}
            value={value}
            disabled={!onChange}
            onChange={(e) => {
              onChange && onChange(e.target.value)
            }}
            onBlur={() => {
              onBlur && onBlur()
            }}
          />
        </div>
      </div>
    </div>
  )
}
export default InputText
