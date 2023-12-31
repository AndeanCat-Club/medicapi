import { Request, Response } from 'express'
import personModel from '../model/person.model'
import { Person } from '../../shared/types/types'

export const list = async (_: Request, res: Response) => {
  try {
    const response: Person[] | [] = await personModel.list()
    res.status(200).send(response)
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
}

export const listByUserId = async (req: Request, res: Response) => {
  try {
    const userId: string = req.params.userId
    const personUserId: Pick<Person, 'userId'> = { userId }

    const response = await personModel.listByUserId(personUserId)
    res.status(200).send(response)
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
}

export const insert = async (req: Request, res: Response) => {
  try {
    const person: Person = req.body
    const response = await personModel.insert(person)
    res.status(201).send(response)
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id
    const personDataToUpdate = req.body
    const response = await personModel.update(id, personDataToUpdate)
    res.status(200).send(response)
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
}
2
export const deletePerson = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id
    const response = await personModel.deletePerson(id)
    res.status(200).send(response)
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
}

export const getById = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id
    const response = await personModel.getById(id)
    if(!response){
      res.status(400).send('Bad Request')
      return  
    }
    res.status(200).send(response)
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
}