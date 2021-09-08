import React, { useRef, useEffect, TextareaHTMLAttributes } from 'react';
import { useField } from '@unform/core'

import { Container } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const TextArea: React.FC<TextareaProps> = ({ name, ...rest }) => {
  const textareaRef = useRef(null);

  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])


  return (
    <Container isErrored={!!error}>
      <textarea ref={textareaRef} id={fieldName} defaultValue={defaultValue} {...rest}></textarea>

    </Container>
  );
}

export default TextArea;
