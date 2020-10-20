import { Server } from './server'
import booking from './booking/booking.router'

const app = new Server().getApp()

app.use('/booking', booking)

export { app }
