export interface Route{
    route_id: number;
    agency_id: number;
    route_short_name: string;
    route_long_name: string;
    route_desc: string;
    route_type: number;
    route_url: string;
    route_color: string;
    route_text_color: string;
    route_sort_order: number;
    min_headway_minutes: number;
    eligibility_restricted: number;
}