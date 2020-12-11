import React, { useContext } from "react"
import { APIContext } from "../contexts/APIContext"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const SinglePost = ({ blog }) => {
    const { people } = useContext(APIContext)
    const person = people.filter((pep) => pep.name === blog)
    console.log(person[0])
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Name: {person[0].name}
                </Typography>
                <Typography variant="body2" component="p">
                    Gender: {person[0].gender}
                </Typography>
                <Typography variant="body2" component="p">
                    Height: {person[0].height}
                </Typography>
                <Typography variant="body2" component="p">
                    Mass: {person[0].mass}
                </Typography>
                <Typography variant="body2" component="p">
                    Birth Year: {person[0].birth_year}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default SinglePost
