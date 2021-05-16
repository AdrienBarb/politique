import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import TextField from '@material-ui/core/TextField'
import { Box } from '@material-ui/core'
import { StyledContactForm } from '../../styles/contactFormStyles'

const ContactForm = ({ setFormSubmission }) => {
  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Entrer une adresse valide')
      .required('Ce champ est requis'),
    firstname: yup.string().required('Ce champ est requis'),
    lastname: yup.string().required('Ce champ est requis'),
    object: yup.string().required('Ce champ est requis'),
    message: yup.string().required('Ce champ est requis'),
  })
  const formik = useFormik({
    initialValues: {
      email: '',
      firstname: '',
      lastname: '',
      object: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...values })
      })

      setFormSubmission(true)
    },
  })

  return (
    <StyledContactForm>
      <form
        onSubmit={formik.handleSubmit}
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <Box display="flex" alignItems="center">
          <TextField
            fullWidth
            id="firstname"
            name="firstname"
            label="Prénom"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
            helperText={formik.touched.firstname && formik.errors.firstname}
            style={{ marginRight: '1rem' }}
          />
          <TextField
            fullWidth
            id="lastname"
            name="lastname"
            label="Nom"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
            helperText={formik.touched.lastname && formik.errors.lastname}
          />
        </Box>

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="object"
          name="object"
          label="Objet"
          value={formik.values.object}
          onChange={formik.handleChange}
          error={formik.touched.object && Boolean(formik.errors.object)}
          helperText={formik.touched.object && formik.errors.object}
        />
        <TextField
          fullWidth
          id="message"
          name="message"
          label="Message"
          multiline
          rows={6}
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />

        <button type="submit">Envoyer</button>
      </form>
    </StyledContactForm>
  )
}

export default ContactForm
