import SmoothScrollHero  from "@/components/ui/smooth-scroll-hero";

const DemoOne = () => {
  return (
    <div className="relative min-h-screen bg-background dark:bg-black">
				<SmoothScrollHero
					scrollHeight={1500}
					desktopImage="https://images.unsplash.com/photo-1563089145-599997674d42"
					mobileImage="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					initialClipPercentage={25}
					finalClipPercentage={75}
				/>
			</div>
  );
};

export { DemoOne };
