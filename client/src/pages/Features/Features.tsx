import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Users,
  Calendar,
  MessageSquare,
  BarChart3,
  Zap,
  Shield,
  Globe,
  CheckCircle,
  ArrowRight,
  Clock,
  Target,
  Lightbulb,
} from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern Teams
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover how SynergySphere's intelligent features transform the way
            teams collaborate, communicate, and achieve their goals.
          </p>
          <Link to="/signup">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage projects, teams, and workflows in
              one place.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Smart Team Management
              </h3>
              <p className="text-gray-600 mb-6">
                Organize your teams with intelligent role assignments, workload
                balancing, and automated task distribution based on skills and
                availability.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Automatic workload balancing
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Skill-based task assignment
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Team performance analytics
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Team Overview</h4>
                  <span className="text-sm text-gray-500">5 members</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Sarah Johnson</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Available
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Mike Chen</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                      Busy
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Alex Rivera</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900">
                      Project Timeline
                    </h4>
                    <Clock className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">
                          Design Phase
                        </div>
                        <div className="text-xs text-gray-500">
                          Completed 2 days ago
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">
                          Development
                        </div>
                        <div className="text-xs text-gray-500">
                          In progress - 60% complete
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">
                          Testing
                        </div>
                        <div className="text-xs text-gray-500">
                          Starts in 5 days
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Proactive Task Tracking
              </h3>
              <p className="text-gray-600 mb-6">
                Stay ahead of deadlines with AI-powered insights that predict
                bottlenecks, suggest optimizations, and keep your projects on
                track.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Predictive deadline analysis
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Bottleneck detection</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Automated progress updates
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <MessageSquare className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Threaded Discussions
              </h3>
              <p className="text-gray-600 mb-6">
                Keep conversations organized with project-specific discussions,
                real-time collaboration, and intelligent message threading.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Project-specific channels
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Real-time messaging</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    File sharing & collaboration
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">
                    Project Discussion
                  </h4>
                  <span className="text-sm text-gray-500">3 new messages</span>
                </div>
                <div className="space-y-3">
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      S
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">
                        Sarah
                      </div>
                      <div className="text-sm text-gray-600">
                        The design mockups are ready for review
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      M
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">
                        Mike
                      </div>
                      <div className="text-sm text-gray-600">
                        Great work! I'll start on the implementation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Go beyond basic project management with intelligent features that
              adapt to your team's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Intelligent Analytics
              </h3>
              <p className="text-gray-600 mb-4">
                Get actionable insights on team performance, project progress,
                and resource utilization with AI-powered analytics.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Performance dashboards</li>
                <li>• Predictive analytics</li>
                <li>• Custom reporting</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Automated Workflows
              </h3>
              <p className="text-gray-600 mb-4">
                Streamline repetitive tasks with smart automation that learns
                from your team's patterns and preferences.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Custom automation rules</li>
                <li>• Smart notifications</li>
                <li>• Workflow templates</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Enterprise Security
              </h3>
              <p className="text-gray-600 mb-4">
                Bank-level security with end-to-end encryption, SSO integration,
                and compliance with industry standards.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• End-to-end encryption</li>
                <li>• SSO integration</li>
                <li>• Compliance ready</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Global Collaboration
              </h3>
              <p className="text-gray-600 mb-4">
                Work seamlessly across time zones with intelligent scheduling,
                multi-language support, and cultural awareness.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Multi-timezone support</li>
                <li>• Language localization</li>
                <li>• Cultural adaptations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Goal Tracking
              </h3>
              <p className="text-gray-600 mb-4">
                Set, track, and achieve team goals with intelligent progress
                monitoring and milestone celebrations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• OKR management</li>
                <li>• Progress visualization</li>
                <li>• Achievement rewards</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Smart Suggestions
              </h3>
              <p className="text-gray-600 mb-4">
                Get intelligent recommendations for task assignments, deadline
                adjustments, and process improvements.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• AI-powered insights</li>
                <li>• Process optimization</li>
                <li>• Proactive recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to experience the future of collaboration?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of teams already using SynergySphere to work smarter
            and achieve more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
              >
                Start Free Trial
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

export default Features;
