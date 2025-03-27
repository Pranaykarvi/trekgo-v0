import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Sample travel history data
const activities = [
  {
    id: 1,
    destination: "Barcelona, Spain",
    dates: "May 15 - May 22, 2023",
    status: "completed",
    image: "/placeholder.svg?height=200&width=200",
    highlights: ["Sagrada Familia", "Park Güell", "La Rambla"],
    rating: 5,
  },
  {
    id: 2,
    destination: "Amsterdam, Netherlands",
    dates: "March 3 - March 10, 2023",
    status: "completed",
    image: "/placeholder.svg?height=200&width=200",
    highlights: ["Anne Frank House", "Van Gogh Museum", "Canal Cruise"],
    rating: 4,
  },
  {
    id: 3,
    destination: "Prague, Czech Republic",
    dates: "December 18 - December 26, 2022",
    status: "completed",
    image: "/placeholder.svg?height=200&width=200",
    highlights: ["Prague Castle", "Charles Bridge", "Old Town Square"],
    rating: 5,
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-6">
      {activities.map((activity) => (
        <Card key={activity.id}>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 p-4 flex justify-center md:justify-start">
              <Avatar className="h-24 w-24 rounded-md">
                <AvatarImage src={activity.image} alt={activity.destination} />
                <AvatarFallback className="rounded-md">{activity.destination.substring(0, 2)}</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex-1">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{activity.destination}</CardTitle>
                    <CardDescription>{activity.dates}</CardDescription>
                  </div>
                  <Badge variant={activity.status === "completed" ? "default" : "outline"}>{activity.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-medium">Highlights:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {activity.highlights.map((highlight, index) => (
                        <Badge key={index} variant="outline">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Your Rating:</p>
                    <div className="flex items-center mt-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span
                          key={index}
                          className={`text-lg ${index < activity.rating ? "text-yellow-500" : "text-muted-foreground"}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

