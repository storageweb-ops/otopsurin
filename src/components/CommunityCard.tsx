import { Link } from "react-router-dom";
import { MapPin, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CommunityCardProps {
  id: string;
  name: string;
  nameThai?: string;
  location: string;
  description: string;
  image: string;
  productTypes: string[];
  memberCount?: number;
  className?: string;
}

const CommunityCard = ({
  id,
  name,
  nameThai,
  location,
  description,
  image,
  productTypes,
  memberCount,
  className,
}: CommunityCardProps) => {
  return (
    <Card variant="elevated" className={cn("group overflow-hidden", className)}>
      <Link to={`/communities/${id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-display text-xl font-semibold text-primary-foreground">
              {name}
            </h3>
            {nameThai && (
              <p className="text-sm text-primary-foreground/80">{nameThai}</p>
            )}
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {productTypes.slice(0, 3).map((type) => (
              <Badge key={type} variant="secondary" className="text-xs">
                {type}
              </Badge>
            ))}
          </div>
          {memberCount && (
            <div className="flex items-center gap-2 text-xs text-elephant">
              <Users className="h-4 w-4" />
              <span>{memberCount} members</span>
            </div>
          )}
        </div>
      </Link>
    </Card>
  );
};

export default CommunityCard;
