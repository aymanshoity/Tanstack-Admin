
import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/app/auth/forgot-password')({
  component: ForgetPassword,
})

function ForgetPassword() {
  return (
    <div>This is customer page</div>
  )
}

