type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}
 
export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728e52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "72ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "78ed5f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "72852f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728e5f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "49ed42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
]
