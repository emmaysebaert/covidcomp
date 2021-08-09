import { createSecureServer } from 'http2'
import dbConnect from '../../../lib/dbConnect'
import Pet from '../../../models/Pet'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const pets = await Pet.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: pets })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const pet = await Pet.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: pet })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}

export async function cases() {
  var data = {
    resource_id: '2f1ba0f3-8c21-4a86-acaf-444be4401a6d', // the resource id
    limit: 5, // get 5 results
    q: 'jones' // query for 'jones'
  };
  fetch({
    url: 'https://data.nsw.gov.au/data/api/3/action/datastore_search',
    data: data,
    dataType: 'jsonp',
  }).then(response => console.log(response.result.total))
}
