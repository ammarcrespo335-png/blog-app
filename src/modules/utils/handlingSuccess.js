export const handlingSuccess = (res, { status = 200, data, msg = 'done' }) => {
  return res.status(status).json({ msg, data, status })
}
