const response = (res, status,message, data, additional) => {

  return res.status(status).json({
    status_code: status,
    message: message,
    data: data,
    additional : additional
  })
  
}

export default response