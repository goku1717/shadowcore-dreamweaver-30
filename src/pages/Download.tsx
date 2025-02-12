
import { Download, Info, HardDriveDownload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface VersionCardProps {
  title: string;
  description: string;
  version: string;
  size: string;
  onDownload: () => void;
}

const VersionCard = ({ title, description, version, size, onDownload }: VersionCardProps) => (
  <div className="glass-card p-6 rounded-lg">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm mb-4 min-h-[60px]">{description}</p>
    <div className="text-sm text-gray-500 mb-4">
      <p>Version: {version}</p>
      <p>Image size: {size}</p>
    </div>
    <div className="space-y-2">
      <Button 
        onClick={onDownload}
        className="w-full bg-blue-500 hover:bg-blue-600"
      >
        Download
      </Button>
      <Button 
        variant="ghost" 
        className="w-full text-gray-400 hover:text-white"
      >
        More
      </Button>
    </div>
  </div>
);

const VersionTableRow = ({ 
  version, 
  subtitle,
  description, 
  downloadLink,
  isSpecial = false
}: { 
  version: string;
  subtitle?: string;
  description: string;
  downloadLink: string;
  isSpecial?: boolean;
}) => (
  <div className="grid grid-cols-12 gap-4 py-6 border-b border-blue-900/20">
    <div className="col-span-4 lg:col-span-3">
      <div className="text-gray-200 font-semibold">{version}</div>
      {subtitle && <div className="text-blue-400/70 text-sm mt-1">{subtitle}</div>}
    </div>
    <div className="col-span-6 lg:col-span-7">
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
    <div className="col-span-2 text-right">
      {isSpecial ? (
        <span className="text-sm text-blue-400">With Tweaks Ultimate Plan</span>
      ) : (
        <Button 
          variant="ghost" 
          className="text-blue-400 hover:text-blue-300"
          onClick={() => window.open(downloadLink, '_blank')}
        >
          Download for Free <HardDriveDownload className="ml-2 w-4 h-4" />
        </Button>
      )}
    </div>
  </div>
);

export default function DownloadPage() {
  const handleDownload = (version: string) => {
    window.open('https://your-download-link.com/shadowcore-' + version + '.iso', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-gradient">Download ShadowCore OS</h1>
          
          {/* Utility Tool Card */}
          <div className="glass-card p-8 rounded-lg mb-12 text-center bg-gradient-to-br from-blue-950/50 to-blue-900/20">
            <h2 className="text-2xl font-bold mb-2">ShadowCore Tweaking Utility</h2>
            <p className="text-blue-400/80 mb-2">Version: Beta 1.0</p>
            <p className="text-blue-400/80 mb-4">File Size: 15 MB</p>
            <div className="flex justify-center gap-4">
              <Button 
                onClick={() => handleDownload('utility')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Download
              </Button>
              <Button variant="ghost" className="text-blue-400 hover:text-blue-300">
                More
              </Button>
            </div>
          </div>

          {/* Version Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <VersionCard
              title="ShadowCore 10 Lite"
              description="Best for old hardware Without the Windows Defender, Store, languages and features."
              version="19H2"
              size="1.3 GB"
              onDownload={() => handleDownload('10-lite')}
            />
            <VersionCard
              title="ShadowCore 10 Standard"
              description="Best for Mid & High-End devices, With the Windows Defender, Store, languages and features."
              version="21H2"
              size="3.8 GB"
              onDownload={() => handleDownload('10-standard')}
            />
            <VersionCard
              title="ShadowCore 11 Lite"
              description="Best for old hardware, With Windows store and xbox."
              version="22H2"
              size="1.3 GB"
              onDownload={() => handleDownload('11-lite')}
            />
            <VersionCard
              title="ShadowCore 11 Standard"
              description="Good for mid-range hardware"
              version="23H2"
              size="3.2 GB"
              onDownload={() => handleDownload('11-standard')}
            />
          </div>

          {/* Archive Section with Tabs */}
          <div className="bg-gradient-to-br from-blue-950/50 to-blue-900/20 backdrop-blur-xl border border-blue-900/20 rounded-lg p-6">
            <Tabs defaultValue="shadowcore10" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-blue-950/50 border border-blue-900/30">
                <TabsTrigger 
                  value="shadowcore10"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  ShadowCore 10
                </TabsTrigger>
                <TabsTrigger 
                  value="shadowcore11"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  ShadowCore 11
                </TabsTrigger>
                <TabsTrigger 
                  value="tweaks"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Tweaks
                </TabsTrigger>
              </TabsList>

              <TabsContent value="shadowcore10" className="mt-6">
                <h3 className="text-xl font-bold mb-6 text-white">ShadowCore 10 Versions</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-12 gap-4 py-2 text-sm text-blue-400/70 border-b border-blue-900/20">
                    <div className="col-span-4 lg:col-span-3">Version</div>
                    <div className="col-span-6 lg:col-span-7">What's New</div>
                    <div className="col-span-2"></div>
                  </div>
                  
                  <VersionTableRow
                    version="ShadowCore 10 22H2 Home-N Standard"
                    subtitle="Best for Mid & High-End devices"
                    description="Best for Mid & High-End devices, With the Windows Defender, Store, languages and features ( User Name : Admin )."
                    downloadLink="https://example.com/shadowcore-10-22h2-home-n.iso"
                  />
                  
                  <VersionTableRow
                    version="ShadowCore 10 1909 Lite"
                    subtitle="The best Windows 10 Build for old hardware"
                    description="0 bloatwares, Low CPU processes, Low RAM usage, 1.3GB iso"
                    downloadLink="https://example.com/shadowcore-10-1909-lite.iso"
                  />
                </div>
              </TabsContent>

              <TabsContent value="shadowcore11" className="mt-6">
                <h3 className="text-xl font-bold mb-6 text-white">ShadowCore 11 Versions</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-12 gap-4 py-2 text-sm text-blue-400/70 border-b border-blue-900/20">
                    <div className="col-span-4 lg:col-span-3">Version</div>
                    <div className="col-span-6 lg:col-span-7">What's New</div>
                    <div className="col-span-2"></div>
                  </div>
                  
                  <VersionTableRow
                    version="ShadowCore 11 22h2 Standard"
                    subtitle="Best ShadowCore OS 11 Release"
                    description="0 bloatwares, 70 CPU processes, Low RAM usage (1.0 gb), Only 5GB of disk usage, 1.5GB iso"
                    downloadLink="https://example.com/shadowcore-11-22h2-standard.iso"
                  />
                </div>
              </TabsContent>

              <TabsContent value="tweaks" className="mt-6">
                <h3 className="text-xl font-bold mb-6 text-white">ShadowCore Tweaks</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-12 gap-4 py-2 text-sm text-blue-400/70 border-b border-blue-900/20">
                    <div className="col-span-4 lg:col-span-3">Version</div>
                    <div className="col-span-6 lg:col-span-7">What's New</div>
                    <div className="col-span-2"></div>
                  </div>

                  <VersionTableRow
                    version="ShadowCore Tweaks Standard"
                    description="Gain up to 20% FPS boost with useful tools. Enjoy performance, network, power tweaks, GPU optimization, registry enhancements, deep PC debloating. ( UnSupported )"
                    downloadLink="https://example.com/shadowcore-tweaks-standard.iso"
                  />

                  <VersionTableRow
                    version="ShadowCoreTweaks Ultimate"
                    description="Get 100% free access to all ShadowCore OS versions, Boost FPS by 30% with advanced scripts, offering optimizations for performance, privacy, network, power, BIOS, GPU, USB, and more."
                    downloadLink="https://example.com/shadowcore-tweaks-ultimate.iso"
                    isSpecial
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}
