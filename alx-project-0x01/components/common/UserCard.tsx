import React from "react";
import {UserProps} from "@/interfaces/index";

export default function UserCard({name, phone, company, email}: UserProps) {
    return(
        <div className="border p-4 rounded-md shadow">
      <h2 className="font-bold text-lg">{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Company: {company.name}</p>
    </div>
    )
}