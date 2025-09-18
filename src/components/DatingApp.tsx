import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, X, MessageCircle, Settings, User, MapPin, Calendar } from "lucide-react";

const DatingApp = () => {
  const [currentView, setCurrentView] = useState("auth");

  const mockProfiles = [
    {
      id: 1,
      name: "Emma",
      age: 25,
      bio: "Love hiking, coffee, and good conversations. Looking for genuine connections.",
      location: "2 miles away",
      interests: ["Travel", "Photography", "Yoga"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop"
    },
    {
      id: 2,
      name: "Alex",
      age: 28,
      bio: "Entrepreneur by day, chef by night. Let's explore the city together!",
      location: "5 miles away",
      interests: ["Cooking", "Business", "Running"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
    }
  ];

  const AuthView = () => (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-12 w-12 text-primary fill-primary" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              LoveConnect
            </h1>
            <p className="text-muted-foreground mt-2">Find your perfect match</p>
          </div>

          <Card className="backdrop-blur-sm bg-card/80 shadow-xl">
            <CardContent className="p-6">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="space-y-4">
                  <div className="space-y-4">
                    <Input placeholder="Email" type="email" />
                    <Input placeholder="Password" type="password" />
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                      onClick={() => setCurrentView("discover")}
                    >
                      Login
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="signup" className="space-y-4">
                  <div className="space-y-4">
                    <Input placeholder="Full Name" />
                    <Input placeholder="Email" type="email" />
                    <Input placeholder="Password" type="password" />
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                      onClick={() => setCurrentView("profile-setup")}
                    >
                      Sign Up
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const ProfileSetupView = () => (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
      <div className="max-w-md mx-auto py-8">
        <h2 className="text-2xl font-bold text-center mb-8">Complete Your Profile</h2>
        
        <Card>
          <CardContent className="p-6 space-y-6">
            <div className="text-center">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="h-12 w-12 text-muted-foreground" />
              </div>
              <Button variant="outline">Upload Photo</Button>
            </div>
            
            <div className="space-y-4">
              <Input placeholder="Age" type="number" />
              <Input placeholder="Location" />
              <textarea 
                className="w-full p-3 border rounded-md resize-none h-24" 
                placeholder="Tell us about yourself..."
              />
              <Input placeholder="Add interests (comma separated)" />
            </div>
            
            <Button 
              className="w-full bg-gradient-to-r from-primary to-accent"
              onClick={() => setCurrentView("discover")}
            >
              Complete Profile
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const DiscoverView = () => (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Navigation */}
      <div className="sticky top-0 bg-background/80 backdrop-blur-sm border-b z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-primary">Discover</h1>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" onClick={() => setCurrentView("matches")}>
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setCurrentView("profile")}>
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Cards */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-sm mx-auto relative">
          {mockProfiles.map((profile, index) => (
            <Card 
              key={profile.id} 
              className={`absolute inset-0 shadow-xl transition-transform ${
                index === 0 ? 'z-10' : 'z-0 scale-95 opacity-50'
              }`}
            >
              <div className="relative">
                <img 
                  src={profile.image} 
                  alt={profile.name}
                  className="w-full h-96 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-lg" />
                
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{profile.name}, {profile.age}</h3>
                  <div className="flex items-center gap-1 text-sm opacity-90">
                    <MapPin className="h-3 w-3" />
                    {profile.location}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-3">{profile.bio}</p>
                <div className="flex flex-wrap gap-1">
                  {profile.interests.map((interest, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="max-w-sm mx-auto mt-8 flex justify-center gap-6">
          <Button 
            size="lg" 
            variant="destructive" 
            className="rounded-full w-16 h-16"
          >
            <X className="h-6 w-6" />
          </Button>
          <Button 
            size="lg" 
            className="rounded-full w-16 h-16 bg-gradient-to-r from-primary to-accent"
          >
            <Heart className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );

  const MatchesView = () => (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Matches</h1>
            <Button variant="ghost" onClick={() => setCurrentView("discover")}>
              Back
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-6">
        <div className="space-y-4">
          {mockProfiles.slice(0, 1).map(profile => (
            <Card key={profile.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex items-center p-4 gap-4">
                <img 
                  src={profile.image}
                  alt={profile.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{profile.name}</h3>
                  <p className="text-sm text-muted-foreground">You matched with {profile.name}</p>
                </div>
                <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
                  Message
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const ProfileView = () => (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Profile</h1>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="ghost" onClick={() => setCurrentView("discover")}>
                Back
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-6 max-w-md">
        <Card>
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="h-16 w-16 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold">Your Profile</h2>
              <p className="text-muted-foreground">Complete your profile to get better matches</p>
            </div>
            
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Settings className="h-4 w-4 mr-2" />
                Preferences
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Privacy Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const views = {
    auth: <AuthView />,
    "profile-setup": <ProfileSetupView />,
    discover: <DiscoverView />,
    matches: <MatchesView />,
    profile: <ProfileView />
  };

  return views[currentView] || <AuthView />;
};

export default DatingApp;