import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function OnboardingForm() {
  return <CardContent></CardContent>;
}

const onBoardingPage = () => {
  return (
    <div
      className={"h-screen w-full container justify-center items-center flex"}
    >
      <Card>
        <CardHeader>
          <CardTitle>Welcome to the Onboarding</CardTitle>
          <CardDescription className="text-muted-foreground">
            Let's get you set up with everything you need to get started.
          </CardDescription>
        </CardHeader>
        <OnboardingForm />
      </Card>
    </div>
  );
};
export default onBoardingPage;
