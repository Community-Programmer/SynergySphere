import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Calendar,
  MessageSquare,
  BarChart3,
  Zap,
  Shield,
  Globe,
  Star,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The Future of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Team Collaboration
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              SynergySphere is the intelligent backbone for modern teams.
              Streamline tasks, enhance communication, and work smarter with
              proactive insights that keep you ahead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything your team needs to succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From task management to intelligent insights, SynergySphere
              provides all the tools your team needs in one seamless platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Smart Team Management
              </h3>
              <p className="text-gray-600">
                Organize teams, assign roles, and track member contributions
                with intelligent workload balancing.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Proactive Task Tracking
              </h3>
              <p className="text-gray-600">
                Stay ahead of deadlines with AI-powered insights that predict
                bottlenecks before they happen.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Threaded Discussions
              </h3>
              <p className="text-gray-600">
                Keep conversations organized with project-specific discussions
                and real-time collaboration.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Intelligent Analytics
              </h3>
              <p className="text-gray-600">
                Get actionable insights on team performance, project progress,
                and resource utilization.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Automated Workflows
              </h3>
              <p className="text-gray-600">
                Streamline repetitive tasks with smart automation that adapts to
                your team's workflow.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Enterprise Security
              </h3>
              <p className="text-gray-600">
                Bank-level security with end-to-end encryption, SSO, and
                compliance with industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why teams choose SynergySphere
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Reduce project delays by 40%
                    </h3>
                    <p className="text-gray-600">
                      Proactive insights help you stay ahead of potential
                      bottlenecks
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Improve team productivity by 60%
                    </h3>
                    <p className="text-gray-600">
                      Smart workload balancing ensures optimal resource
                      utilization
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Eliminate communication gaps
                    </h3>
                    <p className="text-gray-600">
                      Centralized discussions keep everyone in the loop
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Scale with confidence
                    </h3>
                    <p className="text-gray-600">
                      Enterprise-grade security and performance for teams of any
                      size
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">10K+</div>
                    <div className="text-blue-100">Active Teams</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">99.9%</div>
                    <div className="text-blue-100">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50M+</div>
                    <div className="text-blue-100">Tasks Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">4.9</div>
                    <div className="text-blue-100 flex items-center justify-center">
                      <Star className="w-4 h-4 mr-1" />
                      Rating
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to transform your team collaboration?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of teams already using SynergySphere to work smarter,
            not harder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
            >
              Schedule Demo
            </Button>
          </div>
          <p className="text-blue-100 text-sm mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
