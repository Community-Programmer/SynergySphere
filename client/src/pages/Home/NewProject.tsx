import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const tagOptions = [
  "Services",
  "Customer Care",
  "Payments",
  "UI",
  "Upgrade",
  "Migration",
];
const managerOptions = ["Test User", "Jane Doe", "John Smith"];

export default function NewProject() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [manager, setManager] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [showTags, setShowTags] = useState(false);

  const handleTagChange = (tag: string) => {
    setTags(
      tags.includes(tag) ? tags.filter((t) => t !== tag) : [...tags, tag]
    );
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">New Project</h2>
          <div className="flex justify-end mb-4">
            <div className="flex gap-3">
              <Button type="button" variant="secondary">
                Discard
              </Button>
              <Button type="submit" variant="default">
                Save
              </Button>
            </div>
          </div>
        </div>
        <form className="w-full max-w-6xl mx-auto p-10 bg-white rounded-xl shadow flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <div>
                <label className="block font-medium mb-2">Name</label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Project Name"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Tags</label>
                <Select
                  value={tags[0] || ""}
                  onValueChange={(value) => setTags([value])}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select tags" />
                  </SelectTrigger>
                  <SelectContent>
                    {tagOptions.map((tag) => (
                      <SelectItem key={tag} value={tag}>
                        {tag}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block font-medium mb-2">
                  Project Manager
                </label>
                <Select value={manager} onValueChange={setManager}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Manager" />
                  </SelectTrigger>
                  <SelectContent>
                    {managerOptions.map((m) => (
                      <SelectItem key={m} value={m}>
                        {m}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block font-medium mb-2">Deadline</label>
                <Input
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <label className="block font-medium mb-2">Priority</label>
                <div className="flex gap-8 mt-2">
                  <label className="flex items-center gap-2">
                    <Input
                      type="radio"
                      name="priority"
                      value="Low"
                      checked={priority === "Low"}
                      onChange={(e) => setPriority(e.target.value)}
                    />{" "}
                    Low
                  </label>
                  <label className="flex items-center gap-2">
                    <Input
                      type="radio"
                      name="priority"
                      value="Medium"
                      checked={priority === "Medium"}
                      onChange={(e) => setPriority(e.target.value)}
                    />{" "}
                    Medium
                  </label>
                  <label className="flex items-center gap-2">
                    <Input
                      type="radio"
                      name="priority"
                      value="High"
                      checked={priority === "High"}
                      onChange={(e) => setPriority(e.target.value)}
                    />{" "}
                    High
                  </label>
                </div>
              </div>
              <div>
                <label className="block font-medium mb-2">Image</label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border p-3 rounded min-h-[120px]"
                  placeholder="Project Description"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
