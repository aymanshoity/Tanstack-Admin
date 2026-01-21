import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/app/contact/customer/')({
  component: Customer,
})

function Customer() {
  return (
    <div>This is customer page</div>
  )
}

