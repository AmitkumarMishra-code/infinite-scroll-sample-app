import axios from "axios"
import config from "../../config"

exports.handler = function(event, context, callback) {
  const apiRoot = "https://api.unsplash.com"
  const accessKey = process.env.ACCESS_KEY || config.accessKey

  const doggoEndpoint = `${apiRoot}/photos/random?client_id=${accessKey}&count=${10}`

  axios.get(doggoEndpoint).then(res => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        images: res.data,
      }),
    })
  })
}