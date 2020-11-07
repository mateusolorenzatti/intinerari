import { Route } from '../routes/route';
import { Shape } from '../shapes/shape';

export interface Trip {
    trip_id: string;
    service_id: string;
    trip_short_name: string;
    trip_headsign: string;
    direction_id: number;
    block_id: number;
    bikes_allowed: number;
    wheelchair_accessible: number;
    trip_type: number;
    drt_max_travel_time: number;
    drt_avg_travel_time: number;
    drt_advance_book_min: number;
    drt_pickup_message: number;
    drt_drop_off_message: number;
    continuous_pickup_message: string;
    continuous_drop_off_message: string;
    route_id: number;
    shape_id: string;
}