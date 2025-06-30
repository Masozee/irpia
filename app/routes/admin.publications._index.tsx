import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Link } from "@remix-run/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Badge } from "~/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Edit, 
  Trash2,
  FileText,
  BookOpen,
  Users,
  TrendingUp
} from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Publications Management - IRPIA Admin" },
    { name: "description", content: "Manage all IRPIA publications" },
  ];
};

export default function PublicationsAdmin() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pub.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || pub.type === selectedType;
    const matchesStatus = selectedStatus === "all" || pub.status === selectedStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Publications</h2>
          <p className="text-muted-foreground">Manage and organize all publications</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Publication
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Publications</TabsTrigger>
          <TabsTrigger value="policy-briefs">Policy Briefs</TabsTrigger>
          <TabsTrigger value="research-papers">Research Papers</TabsTrigger>
          <TabsTrigger value="working-papers">Working Papers</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Publications</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <p className="text-xs text-muted-foreground">+5 this month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15,234</div>
              <p className="text-xs text-muted-foreground">+1,234 this month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Authors</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">Active contributors</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Downloads</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">338</div>
              <p className="text-xs text-muted-foreground">Per publication</p>
            </CardContent>
          </Card>
        </div>

        <TabsContent value="all" className="space-y-4">
          {/* Filters */}
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search publications..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-8"
                    />
                  </div>
                </div>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Policy Brief">Policy Brief</SelectItem>
                    <SelectItem value="Research Paper">Research Paper</SelectItem>
                    <SelectItem value="Working Paper">Working Paper</SelectItem>
                    <SelectItem value="Report">Report</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="review">Under Review</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Publications Table */}
          <Card>
            <CardHeader>
              <CardTitle>Publications List</CardTitle>
              <CardDescription>
                {filteredPublications.length} of {publications.length} publications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Downloads</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPublications.map((publication) => (
                    <TableRow key={publication.id}>
                      <TableCell className="font-medium">
                        <div className="max-w-[300px] truncate">
                          {publication.title}
                        </div>
                      </TableCell>
                      <TableCell>{publication.author}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{publication.type}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            publication.status === 'published' ? 'default' :
                            publication.status === 'draft' ? 'secondary' : 'outline'
                          }
                        >
                          {publication.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{publication.downloads}</TableCell>
                      <TableCell>{publication.date}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Other tab contents would be similar but filtered by type */}
        <TabsContent value="policy-briefs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Policy Briefs</CardTitle>
              <CardDescription>Evidence-based analysis and actionable recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {publications.filter(p => p.type === 'Policy Brief').length} policy briefs available
              </p>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add New Policy Brief
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="research-papers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Research Papers</CardTitle>
              <CardDescription>Peer-reviewed academic research</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {publications.filter(p => p.type === 'Research Paper').length} research papers available
              </p>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add New Research Paper
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="working-papers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Working Papers</CardTitle>
              <CardDescription>Preliminary research findings and ongoing studies</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {publications.filter(p => p.type === 'Working Paper').length} working papers available
              </p>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add New Working Paper
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Comprehensive research reports and assessments</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {publications.filter(p => p.type === 'Report').length} reports available
              </p>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add New Report
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

const publications = [
  {
    id: 1,
    title: "Democratic Governance and Electoral Integrity in West Africa",
    author: "Dr. Catherine Mumbua",
    type: "Policy Brief",
    status: "published",
    downloads: "2,134",
    date: "Dec 15, 2024"
  },
  {
    id: 2,
    title: "Women's Participation in Peace Processes: Lessons from Sierra Leone",
    author: "Dr. Aminata Diallo",
    type: "Policy Brief",
    status: "published",
    downloads: "1,245",
    date: "Nov 20, 2024"
  },
  {
    id: 3,
    title: "Climate Adaptation Strategies for Coastal Communities",
    author: "Dr. Michael Osei",
    type: "Research Paper",
    status: "published",
    downloads: "2,456",
    date: "Nov 15, 2024"
  },
  {
    id: 4,
    title: "Digital Learning Technologies in African Education",
    author: "Dr. Fatima Al-Hassan",
    type: "Working Paper",
    status: "published",
    downloads: "892",
    date: "Nov 10, 2024"
  },
  {
    id: 5,
    title: "Renewable Energy Transition in West Africa",
    author: "Prof. David Kamau",
    type: "Working Paper",
    status: "review",
    downloads: "1,156",
    date: "Oct 25, 2024"
  },
  {
    id: 6,
    title: "Urban Migration and Housing Policy Analysis",
    author: "Dr. Samuel Nyong",
    type: "Working Paper",
    status: "draft",
    downloads: "0",
    date: "Oct 20, 2024"
  },
  {
    id: 7,
    title: "Regional Security Cooperation in the Mano River Union",
    author: "Dr. Sarah Johnson",
    type: "Report",
    status: "published",
    downloads: "987",
    date: "Sep 30, 2024"
  },
  {
    id: 8,
    title: "Education Policy Reform in Post-Conflict Settings",
    author: "Dr. Amina Diallo",
    type: "Research Paper",
    status: "published",
    downloads: "1,987",
    date: "Sep 25, 2024"
  }
];