import { Request } from 'express'

export interface RequestWithJwt extends Request {
  jwt?: { [key: string]: any }
}

export interface JWTData {
  name: String;
  phone: String;
  id: string;
}
//pet 

export interface Pet {
  name: String
  description: String
  age: Number
  animal: String
  species: String
  owner: Owner
  status: Boolean
  logBook: LogBook[]
  publicCode: String
  userId: String
  imageData: ImageData
}

export interface LogBook {
  logDate: Date,
  title: String,
  descripción: String
}

export interface Owner {
  name: String
  emergencyContact: String
  address: String
  social: String
}

//person

export interface Person {
  firstName: String
  middleName?: String // El segundo nombre es opcional
  lastName: String
  secondLastName?: String // El segundo apellido es opcional
  emergencyContact?: String
  birthDate: Date
  rut: String
  status: Boolean
  medicalRecord: MedicalRecord
  publicCode: String
  userId: String
  imageData: ImageData
}

interface ImageData {
  filePath: String
}

export interface MedicalRecord {
  bloodType: string
  allergies?: string[]
  chronicConditions?: string[]
  medications?: Medication[]
}

export interface Medication {
  name: string
  dosage: string
  prescribedBy: string
  startDate: Date
  endDate?: Date
}

// user interface 

export interface User {
  name: string
  email: string
  phone: string
  password: string
  status?: boolean
  recoverPasswordToken?: string
  isConfirmed?: boolean
}

// authorization interface

export interface AuthData {
  email: string,
  password: string,
}
