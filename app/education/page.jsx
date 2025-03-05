import { Award, BookOpen, Calendar, GraduationCap, MapPin, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EducationPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <h1 className="page-header text-center">Education</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto text-muted-foreground">
            My academic journey and qualifications
          </p>
        </div>
      </section>

      {/* Main Education */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card className="mb-12">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                  <div className="bg-secondary p-4 rounded-full">
                    <GraduationCap className="w-12 h-12 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Bachelor of Computer Science</CardTitle>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>University of Gujrat</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>2021 - 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="border-t border-border pt-6">
                  <h3 className="text-lg font-semibold mb-4">Overview</h3>
                  <p className="text-muted-foreground mb-6">
                    Completed a comprehensive computer science program with a focus on software development, algorithms,
                    data structures, and web technologies. Developed strong problem-solving skills and a solid
                    foundation in computer science principles.
                  </p>

                  <h3 className="text-lg font-semibold mb-4">Key Courses</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <CourseItem>Data Structures & Algorithms</CourseItem>
                    <CourseItem>Database Management Systems</CourseItem>
                    <CourseItem>Web Development</CourseItem>
                    <CourseItem>Object-Oriented Programming</CourseItem>
                    <CourseItem>Software Engineering</CourseItem>
                    <CourseItem>Computer Networks</CourseItem>
                    <CourseItem>Operating Systems</CourseItem>
                    <CourseItem>Artificial Intelligence</CourseItem>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

function CourseItem({ children }) {
  return (
    <li className="flex items-center gap-2 text-muted-foreground">
      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
      {children}
    </li>
  );
}
